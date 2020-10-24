import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Styled
import { HeroInfoBox } from '../../components/heroes/HeroInfoBox'
import { ApplicationState } from '../../store'
import { fetchRequest } from '../../store/heroes/actions'
import { Hero } from '../../store/heroes/types'

interface PropsFromState {
  loading: boolean
  data: Hero[]
  errors?: string
}
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromDispatch & PropsFromState
const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com'

const HeroesIndexPage: React.FC<AllProps> = (props) => {
  const { data, loading, fetchRequest } = props
  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])
  return (
    <HeroInfoBox>
      <table>
        <tbody>
          <tr>
            <td>Hero</td>
            <td>PrimaryAttr</td>
            <td>AttackType</td>
          </tr>
        </tbody>
      </table>
      {loading && data.length === 0 && <div>Loading...</div>}
      {data.map((hero) => (
        <table key={hero.id}>
          <tbody>
            <tr>
              <td>{hero.localized_name}</td>
              <td>
                <img src={API_ENDPOINT + hero.icon} alt={hero.name} />
              </td>
              <td>
                {hero.id}
                <Link to={`/heroes/${hero.name}`}>{hero.localized_name}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </HeroInfoBox>
  )
}

const mapStateToProps = ({ heroes }: ApplicationState) => ({
  loading: heroes.loading,
  data: heroes.data,
  errors: heroes.errors,
})
const mapDispatchToProps = {
  fetchRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesIndexPage)
