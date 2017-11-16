import React, { PureComponent } from 'react'
import { fetchBatches } from '../actions/batches'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import BatchForm from './BatchForm'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 450,
  },
  titleStyle: {
  color: 'black',
  fontSize: '30px',
},
subtitleStyle: {
color: 'black',
},
};

class Batches extends PureComponent {
  static propTypes = {
  signedIn: PropTypes.bool,
}
  componentWillMount() {
    this.props.fetchBatches()
  }

 goToBatch = batchId => event => this.props.push(`/batches/${batchId}`)

  render() {
    if (!this.props.signedIn) return <SignIn />

    return(
      <div style={styles.root}>
        <GridList
         cellHeight={150}
         style={styles.gridList}
        >
     {this.props.batches.map((batch) => (
       <GridTile
         className= "gridTile"
         key={batch._id}
         title= {"Batch " + batch.batchNumber}
         titleStyle={styles.titleStyle}
         subtitle={<span>{batch.startDate.substr(0,10) + " / " + batch.endDate.substr(0,10)}</span>}
         subtitleStyle={styles.subtitleStyle}
         onClick={this.goToBatch(batch._id)}
         titleBackground="rgba(45, 46, 48,0.1)"
        >
       </GridTile>
     ))}
   </GridList>
   <BatchForm />
 </div>
    )
  }
}

const mapStateToProps = ({ batches, currentUser }) => ({ batches, signedIn: !!currentUser && !!currentUser._id, })
const mapDispatchToProps = { fetchBatches, push }

export default connect(mapStateToProps, mapDispatchToProps)(Batches)
