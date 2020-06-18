const Modal = ({ children, closeModal, modalState, title }) => {
    if(!modalState) {
      return null;
    }
    
    return(
      <div className="modal is-active">
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" onClick={closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">
              {children}
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button" onClick={closeModal}>Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
  
  Modal.propTypes = {
    closeModal: React.PropTypes.func.isRequired,
    modalState: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string
  }
  
  class AddClickButton extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        modalState: false
      };
      
      this.toggleModal = this.toggleModal.bind(this);
    }
    
    toggleModal() {    
      this.setState((prev, props) => {
        const newState = !prev.modalState;
        
        return { modalState: newState };
      });
    }
    
    render() {
      return(
        <section className="section">
          <div className="container">
            <div className="has-text-centered content">
              <a className="button is-primary" onClick={this.toggleModal}>
                Open Modal
              </a>
            </div>
            ss
            <Modal 
              closeModal={this.toggleModal} 
              modalState={this.state.modalState} 
              title="Example modal title"
            >
              
            </Modal>
          </div>
        </section>
      );
    }
  }

export default AddClickButton;