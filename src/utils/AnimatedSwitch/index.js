import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { Animate } from './style'

const AnimatedSwitch = props => {
  const { children } = props
  console.log(props);
  return (
    <Animate>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames={props.type || 'fade'}
              timeout={props.duration || 2000}
            >
              <Switch location={location}>{children}</Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Animate>
  )
}

export default AnimatedSwitch