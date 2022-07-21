import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import Contact from '../components/Contact';
import DishDetail from '../components/DishDetail';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TestFetch from '../components/TestFetch';
import { DATABASE } from '../shared/database';
import Menu from './../components/Menu';
import About from './About';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const RenderCard = ({ item }) => {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

const Home = (props) => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
};

const DishWithId = ({ match }) => {
  return (
    <DishDetail
      dish={
        DATABASE.dishes.filter(
          (dish) => dish.id === parseInt(match.params.dishId, 10)
        )[0]
      }
      comments={DATABASE.comments.filter(
        (comment) => comment.dishId === parseInt(match.params.dishId, 10)
      )}
    />
  );
};

const HomePage = ({ dishes, promotions, comments, leaders }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [featuredDish] = useState(() => {
    return DATABASE.dishes.filter((item) => item.featured === true)[0].id;
  });
  const [featuredPromotion] = useState(() => {
    return DATABASE.promotions.filter((item) => item.featured === true)[0].id;
  });
  const [featuredLeader] = useState(() => {
    return DATABASE.leaders.filter((item) => item.featured === true)[0].id;
  });

  const onDishSelect = (dishId) => setSelectedDish(dishId);

  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/home"
          component={() => (
            <Home
              dish={dishes.filter((item) => item.id === featuredDish)[0]}
              promotion={
                promotions.filter((item) => item.id === featuredPromotion)[0]
              }
              leader={leaders.filter((item) => item.id === featuredLeader)[0]}
            />
          )}
        />
        <Route
          exact
          path="/menu"
          component={() => (
            <>
              <Menu
                dishes={dishes}
                onClick={(dishId) => onDishSelect(dishId)}
              />
            </>
          )}
        />
        <Route exact path="/contactus" component={() => <Contact />} />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={leaders} />}
        />
        <Route
          path="/menu/:dishId"
          component={(props) => {
            return <DishWithId match={props.match} />;
          }}
        />
        <Redirect to="/home" />
      </Switch>
      <TestFetch />
      <Footer />
    </>
  );
};

export default withRouter(connect(mapStateToProps)(HomePage));
