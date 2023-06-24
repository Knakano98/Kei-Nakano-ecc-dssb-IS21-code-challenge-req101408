import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };


  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Product</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="entry-name">Product Name</Label>
              <Input
                type="text"
                id="entry-name"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Product Name"
              />
              <Label for="entry-scrum_master">Scrum Master</Label>
              <Input
                type="text"
                id="entry-scrum_master"
                name="scrum_master"
                value={this.state.activeItem.scrum_master}
                onChange={this.handleChange}
                placeholder="Enter Scrum Master"
              />
              <Label for="entry-product_owner">Product Owner</Label>
              <Input
                type="text"
                id="entry-product_owner"
                name="product_owner"
                value={this.state.activeItem.product_owner}
                onChange={this.handleChange}
                placeholder="Enter Product Owner"
              />
              <Label for="entry-start_date">Starting Date</Label>
              <Input
                type="date"
                id="entry-start_date"
                name="start_date"
                value={this.state.activeItem.start_date}
                onChange={this.handleChange}
              />
              <Label for="entry-methodology">Methodology</Label>
              <select
                class="form-control" id="sel1"
                id="entry-methodology"
                name="methodology"
                value={this.state.activeItem.methodology}
                onChange={this.handleChange}
                >
                <option>Agile</option>
                <option>Waterfall</option>
              </select>
              <Label for="entry-location">Location</Label>
              <Input
                type="text"
                id="entry-location"
                name="location"
                value={this.state.activeItem.location}
                onChange={this.handleChange}
                placeholder="Enter Location"
              />
              <Label for="entry-dev_name1">Developers</Label>
              <Input
                type="text"
                id="entry-dev_name1"
                name="dev_name1"
                value={this.state.activeItem.dev_name1}
                onChange={this.handleChange}
                placeholder="Enter Dev Name"
              />
              <Input
                type="text"
                id="entry-dev_name2"
                name="dev_name2"
                value={this.state.activeItem.dev_name2}
                onChange={this.handleChange}
                placeholder="Enter Dev Name"
              />
              <Input
                type="text"
                id="entry-dev_name3"
                name="dev_name3"
                value={this.state.activeItem.dev_name3}
                onChange={this.handleChange}
                placeholder="Enter Dev Name"
              />
              <Input
                type="text"
                id="entry-dev_name4"
                name="dev_name4"
                value={this.state.activeItem.dev_name4}
                onChange={this.handleChange}
                placeholder="Enter Dev Name"
              />
              <Input
                type="text"
                id="entry-dev_name5"
                name="dev_name5"
                value={this.state.activeItem.dev_name5}
                onChange={this.handleChange}
                placeholder="Enter Dev Name"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() =>
              onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
