import showMessage from "../../utils/message/message";

const fetchProjectNames = async () => {
  const token :string = localStorage.getItem('token') || "";
  try {
    const response = await fetch(`http://localhost:3001/projects/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      // body: JSON.stringify({ ...props })
    });
    if (response.status === 201) {
      const projectName = await response.json();
      showMessage("success", "successful fetching project names");
      return projectName;
    }
  } catch (error) {
    console.debug("error : ", error);
    showMessage("error", `${error}`);
    return undefined;
  }
};

export { fetchProjectNames };
