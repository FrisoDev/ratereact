import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import {FETCHED_BATCHES, FETCHED_ONE_BATCH} from '../actions/batches/fetch'
import {fetchBatches} from '../actions/batches/fetch'
export class Batches extends PureComponent{

  componentWillMount() {
    this.props.fetchBatches()
  }

goToBatch = batchId => event => this.props.push(`/batches/${batchId}`)

  renderBatches = (batch, index) => {
    return (
      <MenuItem
        key={index}
        onClick={this.goToBatch(batch._id)}
        />
    )
  }

  render() {
    return (
      <div className="BatchList">
        <h1>Classes</h1>
        <Paper className="paper">
          <Menu>
            {this.props.batches.map(this.renderBatches)}
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps, { fetchBatches, push })(Batches)
