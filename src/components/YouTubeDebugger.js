// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state={
      errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}
}
bitrateClick=()=>{
  this.setState({
    settings:{...this.state.settings, bitrate:12}
  })
}
resolutionClick=()=>
this.setState({
  video:{...this.state.video, resolution: '720P'}
})

render(){
  return(
    <button className="bitrate"  onClick={this.bitrateClick}>Change Bitrate</button>
    <button className="resolution" onClick={this.resolutionClick}>Change Resolution</button>
  )
}
}
