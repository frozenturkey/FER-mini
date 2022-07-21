import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { baseURL } from '../shared/baseURL';

const RenderComments = ({ comments }) => {
  const comment = comments.map((item) => {
    return (
      <div>
        <h6>{'Id:' + item.id + '- rating: ' + item.rating}</h6>
        <p>{item.comment}</p>
        <p>
          {item.author} {item.date}
        </p>
      </div>
    );
  });
  return (
    <div className="col-12 col-sm-7">
      <h2>Comments</h2>
      {comment}
    </div>
  );
};

const TestFetch = () => {
  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);

  const [id, setId] = useState(-1);
  const [dishId, setDishId] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const addComment = (newComment) => {
    return fetch(baseURL + 'comments', {
      method: 'POST',
      body: JSON.stringify(newComment),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        setComments((prev) => prev.concat(newComment));
      }
    });
  };
  const handleSubmit = (dish) => {
    const newComment = {
      id: comments.length,
      dishId: dish.id,
      rating: rating,
      comment: comment,
      author: author,
      date: date.toString(),
    };
    console.log(newComment);
    addComment(newComment);
  };

  useEffect(() => {
    const fetchDishes = () => {
      return fetch(baseURL + 'dishes')
        .then((res) => res.json())
        .then((data) => setDishes(data));
    };
    const fetchComments = () => {
      return fetch(baseURL + 'comments')
        .then((res) => res.json())
        .then((data) => setComments(data));
    };

    if (dishes.length === 0) {
      fetchDishes();
    }
    if (comments.length === 0) {
      fetchComments();
    }
  }, [dishes, comments]);
  console.log(dishes, comments);

  const content = dishes.map((dish) => (
    <div className="col-12 col-sm-8" key={dish.id}>
      <Card>
        <CardImg
          top
          src={`${process.env.PUBLIC_URL}/assets/${dish.image}`}
          alt={dish.name}
        />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
      <h4>Comments</h4>
      <RenderComments
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(dish.id, 10)
        )}
      />
      <Form>
        <FormGroup>
          <label for="author">Author: </label>
          <Input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleAuthorChange}
          />
        </FormGroup>
        <FormGroup>
          <label for="comment">Comment: </label>
          <Input
            type="text"
            id="comment"
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </FormGroup>
        <FormGroup>
          <label for="rating">Rating: </label>
          <Input
            type="number"
            id="rating"
            name="Rating"
            placeholder="Rating"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
          />
        </FormGroup>
        <Button onClick={() => handleSubmit(dish)}>Submit</Button>
      </Form>
    </div>
  ));
  return <div className="col-12 col-sm-5 d-flex">{content}</div>;
};

export default TestFetch;
