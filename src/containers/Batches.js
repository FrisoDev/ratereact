import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import {FETCHED_BATCHES, FETCHED_ONE_BATCH} from '../actions/batches/fetch'
import fetchBatches from '../actions/batches/fetch'
export class Batches extends PureComponent{

  componentWillMount() {
    this.props.fetchBatches()
  }

  goToBatch = batchId => event => this.props.push(`/batches/${batchId}`)


  renderBatches = (batch, index) => {
    const date = `${batch.startDate.substr(0,10)}  ${batch.endDate.substr(0,10)}`
    const batchno = `No. #${batch.batchNumber}`
    return (
      <MenuItem
        key={index}
        onClick={this.goToBatch(batch._id)}
        primaryText= {batchno}
        secondaryText={date}
      />
    )
  }

  render() {
    return (
      <div className="BatchList">
        <h1>There are {this.props.batches.length} Classes</h1>
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
const mapDispatchToProps = { fetchBatches }
export default connect(mapStateToProps, mapDispatchToProps)(Batches)
