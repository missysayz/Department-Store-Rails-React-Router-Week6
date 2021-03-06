import React from "react";
import axios from "axios";
import { Form, Header } from "semantic-ui-react";

class ItemsForm extends React.Component {
  defaultValues = { name: "", price: "" };
  state = { ...this.defaultValues };

  componentDidMount = () => {
    if (this.props.item) {
      this.setState({
        name: this.props.item.name,
        price: this.props.item.description
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const item = { ...this.state };
    if (this.props.item) {
      axios.put(`/api/departments/${this.props.department.id}`, department);
      this.props.toggleShowForm();
      this.props.updateState(this.state.name, this.state.description);
    } else {
      axios.post("/api/departments", department).then(res => {
        this.props.history.push("/departments");
      });
      //TODO: make api POST request
      this.setState({ ...this.defaultValues });
    }
  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <Header as='h1'>Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              label='Name'
              name='name'
              placeholder='Name'
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label='Description'
              name='description'
              placeholder='Description'
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color='blue'>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ItemsForm;
