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
              <Input
                type="text"
                id="entry-scrum_master"
                name="scrum_master"
                value={this.state.activeItem.scrum_master}
                onChange={this.handleChange}
                placeholder="Enter Scrum Master"
              />
              <Input
                type="text"
                id="entry-product_owner"
                name="product_owner"
                value={this.state.activeItem.product_owner}
                onChange={this.handleChange}
                placeholder="Enter Product Owner"
              />
              <Input
                type="date"
                id="entry-start_date"
                name="start_date"
                value={this.state.activeItem.start_date}
                onChange={this.handleChange}
              />

              <Input
                type="text"
                id="entry-methodology"
                name="methodology"
                value={this.state.activeItem.methodology}
                onChange={this.handleChange}
              />
              <Input
                type="text"
                id="entry-location"
                name="location"
                value={this.state.activeItem.location}
                onChange={this.handleChange}
                placeholder="Enter Location"
              />
              <Input
                type="text"
                id="entry-dev_names"
                name="dev_names"
                value={this.state.activeItem.dev_names}
                onChange={this.handleChange}
                placeholder="Enter Dev Names"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
