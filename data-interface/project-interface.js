class ProjectInterface {
  constructor(id, title) {
    (this.id = id),
      (this.title = title),
      (this.sound_boxes = []),
      (this.recordings = []),
      (this.text_blocks = []);
  }

  addRecording(recording) {
    this.recordings.push(recording);
  }

  addTextBlock(text_block) {
    this.text_blocks.push(text_block);
  }

  addSoundBox(sound_box) {
    this.sound_boxes.push(sound_box);
  }
}

export default ProjectInterface;
