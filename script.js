const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

const saveNotes = () => {
	const notes = document.querySelectorAll(".note textarea");
	
	const data = [];
	notes.forEach( (note) => {
		data.push(note.value)
		console.log(data);
	}
	)
	console.log(notes);
	if(data.length === 0){
		localStorage.removeItem("notes")
	} else{
		localStorage.setItem("notes",JSON.stringify(data));
	}
	
}

   
addBtn.addEventListener("click",function(){
		addNote()
})

	 // <div class="note">
		// <div class="tool">
			// <i class="fas fa-save"></i>
			// <i class="fas fa-trash"></i>
		// </div>
		// <textarea></textarea>
	// </div>

const addNote = (text = "") => {
	const note = document.createElement("div");
	note.classList.add("note")
	note.innerHTML= `
		<div class="tool">
			<i class="save fas fa-save">Save</i>
			<i class="trash fas fa-trash">Delete</i>
		</div>
		<textarea>${text}</textarea>
	`;
	
	note.querySelector('.trash').addEventListener("click", function(){
		note.remove()
		saveNotes()
	})
	
	note.querySelector(".save").addEventListener("click", function(){
		saveNotes()
	})
	
	note.querySelector("textarea").addEventListener("focusout", function(){
		saveNotes()
	})
	main.appendChild(note);
	saveNotes()
}

	(
		function() {
			const lsnotes = JSON.parse(localStorage.getItem("notes"));
			if(lsnotes === null){
				addNote()
			}else{
					lsnotes.forEach( (lsNote) => {
					addNote(lsNote)
				})
			}
	
		}
	)()