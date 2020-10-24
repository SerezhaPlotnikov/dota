import React from 'react'
import { connect } from 'react-redux'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { ApplicationState } from '../store'
import { Hero } from '../store/heroes/types'
// import { Route, Switch } from 'react-router';
import HeroesIndexPage from './heroes/index'
import ShowHeroesPage from './heroes/show'

interface PropsFromState {
  loading: boolean
  data: Hero[]
  errors?: string
}

type AllProps = PropsFromState & RouteComponentProps

const HeroesPage: React.FC<AllProps> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={HeroesIndexPage} />
      <Route path={`${match.path}/:name`} component={ShowHeroesPage} />
    </Switch>
  )
}

const mapStateToProps = ({ heroes }: ApplicationState) => ({
  loading: heroes.loading,
  errors: heroes.errors,
  data: heroes.data,
})

export default connect(mapStateToProps)(HeroesPage)
