<location-select>
	<div class="form-group">
	  	<label for="locationsselect">Locations</label>
		<select onchange={change} class="form-control" id="locationsselect">
			<option each={opts.locations} value={location}>{location}</option>
		</select>
	</div>

	change(e) {
			console.log('Select changed');

		    opts.userlist.filter(function(job) {
		    	//console.log(job);
		    	return (e.target.value=='All') || (job._values.job_location == e.target.value);
		    })
	}

</location-select>