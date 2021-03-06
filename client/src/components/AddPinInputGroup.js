import React from 'react';

export default function AddPinInputGroup(props) {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="addPinLink"></label>
				<input type="text" className="form-control" id="addPinLink" placeholder="Image Link ..." />
			</div>
			<button type="button" className="btn btn-default" onClick={props.onClick}>Add</button>
		</form>
	)
}
