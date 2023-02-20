document.getElementById('apply-bg').addEventListener('click', ()=>{
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends) {
        friend.style.backgroundColor = 'tomato';
        friend.style.color = 'white';
        friend.style.padding = '0.25rem';
    }
});
document.getElementById('center-third').addEventListener('click', ()=>{
    const index = document.getElementById('friends').childElementCount;
    const friends = document.getElementsByClassName('friend')[Math.floor(index/2)];
    if (friends.style.textAlign === 'center'){
        friends.style.textAlign = 'left'
    }
    else {
        friends.style.textAlign = 'center'
    }
});
document.getElementById('add-friend').addEventListener('click', ()=>{
    const friends = document.getElementById('friends');
    const appandContainer = document.createElement('div');
    appandContainer.innerHTML = `
    <div class="friend">
        <h3 class="friend-name">Friend</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    `
    friends.appendChild(appandContainer);
    
});