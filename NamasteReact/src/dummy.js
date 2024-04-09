const Dummy = async () =>{
 const data = await  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`)
.then(response => 
	 response.json()
)
.then(data => data.contents);

console.log(data.json())



return<p>dummy page for testing code snippets</p>
}

export default Dummy;