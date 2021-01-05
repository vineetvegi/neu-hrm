import React, {Component} from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Profile extends Component {

    state = {
        events: [],
        newEventData: {
            event_id: '',
            event_name: '',
            event_time: '',
            event_date: '',
            event_url: ''
            },
        editEventData: {
            event_id: '',
            event_name: '',
            event_time: '',
            event_date: '',
            event_url: ''
            },
        newEventModal: false,
        editEventModal: false
    }

    componentDidMount() {
        this._refreshedEventList();
    }

    toggleNewEventModal() {
        this.setState({
            newEventModal: ! this.state.newEventModal
        });
    }

    toggleEditEventModal() {
        this.setState({
            editEventModal: ! this.state.editEventModal
        });
    }

    addEvent() {
        axios.post('http://localhost:5000/add', this.state.newEventData).then((res) => {
            console.log(res.data)
            let { events } = this.state;
            events.rows.push(res.data);

            this.setState({ events, newEventModal:false, newEventData: {
                                                                        event_id: '',
                                                                        event_name: '',
                                                                        event_time: '',
                                                                        event_date: '',
                                                                        event_url: ''
            }});
        });
    }

    updateEvent() {
        let {event_id, event_name, event_time, event_date, event_url} = this.state.editEventData;
        axios.post('http://localhost:5000/update', this.state.editEventData).then((res) => {
            this._refreshedEventList();

            this.setState({
                editEventModal: false, editEventData: {
                                                        event_id: '',
                                                        event_name: '',
                                                        event_time: '',
                                                        event_date: '',
                                                        event_url: ''
                 }
            })
        });
    }

    editEvent(event_id, event_name, event_time, event_date, event_url) {
        this.setState({
            editEventData: { event_id, event_name, event_time, event_date, event_url },
            editEventModal: !this.state.editEventModal
        });
    }

    deleteEvent(id) {
        axios.delete('http://localhost:5000/delete/' + id).then((res) => {
            this._refreshedEventList();
        });
    }

    _refreshedEventList() {
        axios.get('http://localhost:5000/').then((res) => {
            this.setState({
                events: res.data
            })
        });
    }
  render () {
    //   console.log(this.state.events.rows)
      let rows = [];
      if (this.state.events.rows) {
          rows = this.state.events.rows.map((event) => {
            //   console.log(event.event_id)
          return (
                <tr key={event.event_id}>
                    <td>{event.event_id}</td>
                    <td>{event.event_name}</td>
                    <td>{event.event_time}</td>
                    <td>{event.event_date}</td>
                    <td>{event.event_url}</td>
                    <td>
                        <button color="success" size="sm" className="mr-2" onClick={this.editEvent.bind(this, event.event_id, event.event_name, event.event_time, event.event_date, event.event_url)}>Edit</button>
                        <button color="danger" size="sm" onClick={this.deleteEvent.bind(this, event.event_id)}>Delete</button>
                    </td>
                </tr>
          )
      });
      }
      return (
          <div className="Profile container">
          <br />
       <Modal isOpen={this.state.newEventModal} toggle={this.toggleNewEventModal.bind(this)}>
            <ModalHeader toggle={this.toggleNewEventModal.bind(this)}>Add a new Event</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="id">ID</Label>
                    <Input type="number" id="id" value={this.state.newEventData.event_id} onChange={(e) => {
                        let { newEventData } = this.state;
                        newEventData.event_id = e.target.value;
                        this.setState({newEventData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" value={this.state.newEventData.event_name} onChange={(e) => {
                        let { newEventData } = this.state;
                        newEventData.event_name = e.target.value;
                        this.setState({newEventData});
                    }}    />
                </FormGroup>
                <FormGroup>
                    <Label for="time">Time</Label>
                    <Input type="time" id="time" value={this.state.newEventData.event_time} onChange={(e) => {
                        let { newEventData } = this.state;
                        newEventData.event_time = e.target.value;
                        this.setState({newEventData});
                    }}  />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="date" id="date" value={this.state.newEventData.event_date} onChange={(e) => {
                        let { newEventData } = this.state;
                        newEventData.event_date = e.target.value;
                        this.setState({newEventData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="url">Url</Label>
                    <Input type="url" id="url" value={this.state.newEventData.event_url} onChange={(e) => {
                        let { newEventData } = this.state;
                        newEventData.event_url = e.target.value;
                        this.setState({newEventData});
                    }} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.addEvent.bind(this)}>Add an Event</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewEventModal.bind(this)}>Cancel</Button>
            </ModalFooter>
        </Modal>

       <Modal isOpen={this.state.editEventModal} toggle={this.toggleEditEventModal.bind(this)}>
            <ModalHeader toggle={this.toggleEditEventModal.bind(this)}>Edit event</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="id">ID</Label>
                    <Input type="number" id="id" value={this.state.editEventData.event_id} onChange={(e) => {
                        let { editEventData } = this.state;
                        editEventData.event_id = e.target.value;
                        this.setState({editEventData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" value={this.state.editEventData.event_name} onChange={(e) => {
                        let { editEventData } = this.state;
                        editEventData.event_name = e.target.value;
                        this.setState({editEventData});
                    }}    />
                </FormGroup>
                <FormGroup>
                    <Label for="time">Time</Label>
                    <Input type="time" id="time" value={this.state.editEventData.event_time} onChange={(e) => {
                        let { editEventData } = this.state;
                        editEventData.event_time = e.target.value;
                        this.setState({editEventData});
                    }}  />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="date" id="date" value={this.state.editEventData.event_date} onChange={(e) => {
                        let { editEventData } = this.state;
                        editEventData.event_date = e.target.value;
                        this.setState({editEventData});
                    }} />
                </FormGroup>
                <FormGroup>
                    <Label for="url">Url</Label>
                    <Input type="url" id="url" value={this.state.editEventData.event_url} onChange={(e) => {
                        let { editEventData } = this.state;
                        editEventData.event_url = e.target.value;
                        this.setState({editEventData});
                    }} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.updateEvent.bind(this)}>Edit the event</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditEventModal.bind(this)}>Cancel</Button>
            </ModalFooter>
        </Modal>

          <Table bordered striped >
              <thead style={{width: '100%'}}>
                  <tr>
                      <th style={{width: '1%'}}>#</th>
                      <th style={{width: '25%'}}>NAME</th>
                      <th style={{width: '10%'}}>TIME</th>
                      <th style={{width: '12%'}}>DATE</th>
                      <th style={{width: '10%'}}>URL</th>
                      <th style={{width: '15%'}}>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
          </Table>
          <br />
          <div className="text-center">
          <Button color="secondary" onClick={this.toggleNewEventModal.bind(this)}>Add an Event</Button>
          </div>
          </div>
      );

  }

}

export default Profile
















//   constructor(props) {
//         super(props);
//         this.state = {
//             event: [],
//             loading: true,
//         }
//     }





    // async componentDidMount() {
    //     const url = "http://localhost:5000/";
    //     const response = await fetch(url);
    //     console.log(response)
    //     const data = await response.json();
    //     this.setState({event: data.rows, loading: false});
    //     console.log(data.rows);
    // }

//     render() {
//         // if(this.state.loading) {
//         //     return <div>loading...</div>
//         // }
//         // if(!this.state.event.length) {
//         //     return <div>Didn't get any event</div>
//         // }
//         const columns = [
//             {
//                 dataField: "event_id",
//                 text: "ID"
//             },
//             {
//                 dataField: "event_name",
//                 text: "NAME",
//                 maxWidth: 100
//             },
//             {
//                 dataField: "event_time",
//                 text: "TIME"
//             },
//             {
//                 dataField: "event_date",
//                 text: "DATE"
//             },
//             {
//                 dataField: "event_url",
//                 text: "URL"
//             },
//             {
//                 text: "EDIT"
//             }
//         ]
//         return (
//         <div className="profile">
//             <BootstrapTable
//             keyField="event_id"
//             data={this.state.event}
//             columns={columns}
//         />
//         </div>
// );
//     }

