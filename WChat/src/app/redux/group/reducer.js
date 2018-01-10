import Immutable from 'seamless-immutable';
import actionTypes from './actionTypes';
import { cloneAndInsertInArray, updateElementInArray } from '../../../utils/arrayUtils';
import { GROUPS_PAGE_SIZE, CHAT_PAGE_SIZE } from '../../../utils/constants';

const initialState = {
  groups: [],
  groupsPage: 1,
  groupsShowing: [],
  groupsLoading: false,
  currentGroupChat: [],
  currentGroupChatShowing: [],
  chatPage: 1,
};

const group = (state = Immutable(initialState), action) => {
  switch (action.type){
    case actionTypes.GET_GROUPS_SUCCESS:
      return state.merge({
        groups: action.groups,
        groupsLoading: false,
        groupsShowing: action.groups.slice(0, state.groupsPage * GROUPS_PAGE_SIZE)
      });
    case actionTypes.GET_GROUPS_LOADING:
      return state.merge({
        groupsLoading: true
      });
    case actionTypes.GET_GROUPS_FAILURE:
      return state.merge({
        groupsLoading: false,
        groupsError: action.error
      });
    case actionTypes.GET_GROUP_CHAT_SUCCESS:      
      if(!action.chats.length){
        return state.merge({
          currentGroupChat: [],
          currentGroupChatShowing: []
        })
      }
      return state.merge({
        groups: updateElementInArray(
          state.groups, 
          {
            chats: action.chats, 
            lastChat: action.chats.reduce((latest, current) => latest.createdAt > current.createdAt ? latest : current)
          }, 
          action.groupId),
        currentGroupChat: action.chats,
        currentGroupChatShowing: action.chats.reverse().slice(0, state.chatPage * CHAT_PAGE_SIZE),
      })
    case actionTypes.SEND_GROUP_MESSAGE_FAILURE:
      return state.merge({
        error: action.error
      })
    case actionTypes.GROUP_MESSAGE_SENT:
      const oldGroup = state.groups.find((group) => group.id === action.groupId);

      if(!oldGroup)
        return state;

      const newChats = [...oldGroup.chats, action.message];
      
      return state.merge({
        groups: updateElementInArray(
          state.groups, 
          {
            chats: newChats, 
            lastChat: action.message
          }, 
          action.groupId
          ),
        currentGroupChat: newChats.reverse(),
        currentGroupChatShowing: newChats.slice(0, (state.chatPage * CHAT_PAGE_SIZE))
      })
    case actionTypes.LOAD_MORE_GROUPS:
      if(state.contactsShowing.length < (state.contactsPage * CONTACTS_PAGE_SIZE))
        return state;
      const newContactPage = state.contactsPage + 1;
      return state.merge({
        contactsPage: newContactPage,
        contactsShowing: state.contacts.slice(0, (newContactPage * CONTACTS_PAGE_SIZE)),
      })
    case actionTypes.LOAD_MORE_GROUP_CHAT:
       if(state.currentGroupChatShowing.length < (state.chatPage * CHAT_PAGE_SIZE))
        return state;
      const newChatPage = state.chatPage + 1;
      return state.merge({
        chatPage: newChatPage,
        currentGroupChatShowing: state.currentGroupChat.slice(0, (newChatPage * CHAT_PAGE_SIZE))
      })
    default:
      return state;
  };
};

export default group;