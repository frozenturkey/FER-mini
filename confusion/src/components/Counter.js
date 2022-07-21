import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const Counter = (props) => {
  const { count, dispatch } = props;

  const incre = () => {
    dispatch({ type: 'INCRE', onChange: (prev) => prev + 3 });
  };

  const decre = () => {
    dispatch({ type: 'DECRE', onChange: (prev) => prev - 2 });
  };

  return (
    <div>
      <h2>Counter</h2>
      <button className="btn btn-primary" onClick={decre}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-primary" onClick={incre}>
        +
      </button>
    </div>
  );
};

export default connect(mapStateToProps)(Counter);
