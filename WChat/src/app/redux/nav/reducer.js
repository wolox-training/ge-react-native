const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Chat':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Chat' }),
        state
      );
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
