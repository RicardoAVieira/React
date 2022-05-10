import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
	return (
		<div className="UseCallback">
			<PageTitle
				title="Hook UseCallback"
				subtitle="Retorna uma função memoizada!"
			/>
		</div>
	);
};

export default UseCallback;
