const addCommentHandler = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comment-body').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/blogs/${id}`, {
        method: 'POST',
        body: JSON.stringify({ 
            id: id,
            text: text
         }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        alert('Success!');
        location.reload();
        // return false; // ???
    } else {
        alert('Failed to add comment');
    }

};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', addCommentHandler);