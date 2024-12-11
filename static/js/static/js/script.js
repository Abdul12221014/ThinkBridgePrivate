// Function to handle comment submission
document.querySelector('.cta-button').addEventListener('click', function() {
    const commentText = document.querySelector('textarea').value;

    if (commentText.trim() === "") {
        alert("Please enter a comment before posting.");
        return;
    }

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
        <h4>New Comment</h4>
        <p>${commentText}</p>
        <p class="author">Posted by: Anonymous</p>
    `;

    // Append the new comment to the comments section
    document.querySelector('.comments-section').appendChild(newComment);

    // Clear the textarea
    document.querySelector('textarea').value = "";
});

// Flag the problem as inappropriate
function flagProblem(problemId) {
    const confirmation = confirm("Are you sure you want to flag this problem as inappropriate?");
    if (confirmation) {
        // Here you can make an API call or perform other actions to flag the problem.
        alert(`Problem ${problemId} has been flagged.`);
    }
}

// Function to dynamically add the upvotes and downvotes functionality
document.querySelectorAll('.upvote-btn').forEach(button => {
    button.addEventListener('click', function() {
        let votesElement = this.nextElementSibling;
        let currentVotes = parseInt(votesElement.innerText);
        votesElement.innerText = currentVotes + 1;
    });
});

document.querySelectorAll('.downvote-btn').forEach(button => {
    button.addEventListener('click', function() {
        let votesElement = this.previousElementSibling;
        let currentVotes = parseInt(votesElement.innerText);
        votesElement.innerText = currentVotes - 1;
    });
});
