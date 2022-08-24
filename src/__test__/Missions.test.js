import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../Redux/store';
import { joiningMissionAction, leavingMissionAction } from '../Redux/mission';

describe('Missions tests', () => {
  it('render test', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should return an action with type JOIN_MISSION', () => {
    const id = 1;
    const action = joiningMissionAction(id);
    expect(action.type).toBe('JOIN_MISSION');
  });

  it('should should return an action with type LEAVE_MISSION', () => {
    const id = 1;
    const action = leavingMissionAction(id);
    expect(action.type).toBe('LEAVE_MISSION');
  });
});