// create main app component
class App extends React.Component {
    state = {
      storedNotes: [
        { title: "23 June,21", note: "You did it" },
        { title: "24 June,21", note: "You did it again" }
      ],
      writingNote: true,
      currentRead: { title: "23 June,21", note: "You did it" }
    };
  
    // creating new note
    handleClick = () => {
      const newTitle = document.getElementById("new-note-title").value;
      const newContent = document.getElementById("new-note-content").value;
      const newObject = { title: newTitle, note: newContent };
  
      this.setState({
        storedNotes: [...this.state.storedNotes, newObject]
      });
    };
    
    // Reading note
    readNote = e => {
      event.preventDefault();
      console.log(e.target);
      const title = e.currentTarget.firstElementChild.innerHTML;
      const note = e.currentTarget.lastElementChild.innerHTML;
      this.setState({ writingNote: false, currentRead: { title: title, note: note} }); 
    }; 
  
    // writing view
    writeNote = () => {
      this.setState({writingNote: true})
    }
  
    // main render
    render() {
      const storedNotes = [];
      this.state.storedNotes.forEach(note => {
        storedNotes.push(
          <div onClick={this.readNote} className="stored-notes" key={note.title}>
            <h2 id="note-title">{note.title}</h2>
            <p id="note-content">{note.note}</p>
          </div>
        );
      });
  
      let view;
  
      if (this.state.writingNote) {
        view = <NoteWriter 
                 handleClick={this.handleClick} />;
      } else {
        view = <NoteReading 
                 currentTitle={this.state.currentRead.title} 
                 currentNote={this.state.currentRead.note} />;
      }
  
      return (
        <div id="main-container">
          <div id="side-bar">
            <div onClick={this.writeNote} id="create-a-note" className="stored-notes">
              <p>Create a Note</p>
            </div>
            {storedNotes}
          </div>
          {view}
        </div>
      );
    }
  }
  // End Main App
  
  // Note Writing View Component
  class NoteWriter extends React.Component {
    render() {
      return (
        <div className="note-container">
          <input id="new-note-title" type="text" placeholder="title" />
          <textarea
            id="new-note-content"
            placeholder="Jot a note down"
            rows="20"
            cols="80"
          />
          <button id="button" onClick={this.props.handleClick}>
            Submit Note
          </button>
        </div>
      );
    }
  }
  
  // Note Reading View Component
  class NoteReading extends React.Component {
    render() {
      return (
        <div className="note-container">
          <h1>Re-read your thoughts</h1>
          <h1 id="read-note-title">{this.props.currentTitle}</h1>
          <p id="read-note-content">{this.props.currentNote}</p>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  