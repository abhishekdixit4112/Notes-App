import React from 'react';
import {MdSearch} from 'react-icons/md';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Search=({handleSearchNote})=>{

    
  // const start = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  //  if (!browserSupportsSpeechRecognition) {
  //    return null
  //  }

    return(

        <div className="Search">
        <MdSearch className="search-icons" size="1.5rem"/>
        <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="Type To Search...."/>
        </div>
    );
};
export default Search;