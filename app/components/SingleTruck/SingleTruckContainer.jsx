import { connect } from 'react-redux';
import SingleTruck from './SingleTruck';
import { fetchSingleTruckFromServer } from '../../reducers/singleTruck';


const mapStateToProps = function (state) {
  return {
    truck: state.currentTruck
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadSingleTruck: function () {
      const truckId = ownProps.params.truckId;
      const thunk = fetchTruckFromServer(truckId);
      dispatch(thunk);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTruck);
