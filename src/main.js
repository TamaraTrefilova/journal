import './styles.css';
import { readString } from './journal.js';

$(document).ready(function(){

  $("journal-form").submit(function(event){
    event.preventDefault();
    var input = $("#goal").val();
    console.log(readString(input));

  });

});
