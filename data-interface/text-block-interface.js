class TextBlockInterface {
  constructor(id, title, text) {
    (this.id = id),
      (this.title = title),
      (this.text = text),
      (this.text_recordings = []);
  }

  addTextRecording(text_recording) {
    this.text_recordings.push(text_recording);
  }
}

export default TextBlockInterface;
