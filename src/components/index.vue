<template>
    <input type="text" placeholder="Team Name" id="teamName">
    <!-- Div for holding all the team members -->
    <!-- The buttons go here-->
    <button class="form" @click="formFunction()">Form</button>
    <button class="teamClass" @click="teamFunction()">Team</button>
    <div class="teamMembers">
      <ul>
        <!-- creates one for every member -->
       <!-- I had this part different orginally, but changed it to be one line because I dont know how else to do it -->
       <li v-for="member in members" :key="member.id">
          Name: {{ member.name }} <br> Phone: {{ member.phone }} <br> E-mail: {{ member.email }} <br> Role: {{ member.role }} <br> <!-- Button, reuses name to create multiple, uses @click for Vue(?) -->
        <button class="button" @click="addToTeam(member)">Add to Team</button></li>
      </ul>
    </div>
    <!-- This is where member's go when you click their button-->
    <div class="team">
      <!-- Placeholder -->
    </div>
  </template>
  
  <script>
  //This is the requred data (edited slightly to make the script not so long)
  export default {
    data() {
      return {
        members: [
          { id: 1, name: "Chandler Bing", phone: "123 123 1234", email: "cBing@gmail.com", role: 'Developer', team: '' },
          { id: 2, name: "Joey Tribbiani", phone: "321 321 4321", email: "jtribby@gmail.com", role: 'UI/UX', team: '' },
          { id: 3, name: "Ross Geller", phone: "222 333 4444", email: "rgeller@gmail.com", role: 'Developer', team: '' },
          { id: 4, name: "Monica Bing", phone: "123 123 1235", email: "mbing@gmail.com", role: 'Designer', team: '' },
          { id: 5, name: "Rachel Green", phone: "876 345 1678", email: "rgreen@gmail.com", role: 'UI/UX', team: '' },
          { id: 6, name: "Phoebe Buffay", phone: "678 908 5686", email: "pbuff@gmail.com", role: 'UI/UX', team: '' },
          { id: 7, name: "Stacy Boling", phone: "345 679 4212", email: "sBoling@gmail.com", role: 'Designer', team: '' },
          { id: 8, name: "Jake Trimult", phone: "443 665 7888", email: "jtrim@gmail.com", role: 'Developer', team: '' },
          { id: 9, name: "Rose Greathouse", phone: "345 567 9087", email: "rgreat@gmail.com", role: 'UI/UX', team: '' },
          { id: 10, name: "Mindy Kellum", phone: "555 666 7777", email: "mKellum@gmail.com", role: 'UI/UX', team: '' },
          { id: 11, name: "Sarah Miller", phone: "987 654 1234", email: "smiller@gmail.com", role: 'Developer', team: '' },
          { id: 12, name: "Caroline Bender", phone: "111 222 3456", email: "cBend@gmail.com", role: 'Designer', team: '' },
        ],
    selectedMembers: [ /*This is an empty that is going to hold the members when their button is clicked */]
    };
  },
  // This part is for adding to a team using the button and addToTeam
  methods: {
    addToTeam(member) {
      // Add the selected member to the team
     //console.log(member)
      this.selectedMembers.push(member);
    },
    /* This part will make the buttons to switch the form and teams work */
    teamFunction() {
    const formElements = document.getElementsByClassName('form');
    for (const formElement of formElements) {
      //Switches between displaynone and block
      formElement.style.display = 'none';
    }
    //Have to use $el.
    this.$el.style.display = 'block';
  },
  formFunction() {
    const teamElements = document.getElementsByClassName('teamClass');
    // Same as above
    for (const teamElement of teamElements) {
      teamElement.style.display = 'none';
    }

    this.$el.style.display = 'block';
  },
  }
};
  </script>
  
  <style scoped>
        div{
          background-color: antiquewhite;
          border-radius: 30px;
          border-bottom: 2px black solid;
      }
      * {
    color: black;
    padding: 2px;
    margin: 16px;
  }
    button{
        border-bottom: 2px solid black;
    }

    .team{
      display:none;
    }
  </style>
  