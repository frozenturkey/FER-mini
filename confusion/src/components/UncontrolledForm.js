import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Form, Input } from 'reactstrap';

const UncontrolledForm = (props) => {
  const [isCase, setIsCase] = useState(false);
  const inputText = useRef(null);

  const onChangeIsCase = () => {
    const value = inputText.current.value;
    setIsCase((prev) => !prev);
    if (isCase) {
      inputText.current.value = value.toUpperCase();
    } else {
      inputText.current.value = value.toLowerCase();
    }
  };

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-2 col-sm-2">
          <Form>
            <p>
              {/* <input
                type="text"
                ref={inputText}
                placeholder="Input a text..."
              /> */}
              <Input
                type="text"
                innerRef={inputText}
                placeholder="Input a text..."
              />
            </p>
            <p>
              <input
                type="button"
                onClick={onChangeIsCase}
                value="Toggle case"
                className="btn btn-success"
              />
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledForm;
