import { connect } from 'react-redux';
import Restaurants from './Restaurants';
import { bindActionCreators } from 'redux';
import { getReataurantData } from './action';

const mapStateToProps = (store) => {
  return {
    restaurantList: store.restaurantReducer.restaurantList,
    entity_id: store.locationReducer.entity_id,
    entity_type: store.locationReducer.entity_type,
    lat: store.locationReducer.latitude,
    long: store.locationReducer.longitude,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getReataurantData
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)