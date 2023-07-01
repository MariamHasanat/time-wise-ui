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

    });
    if (response.status === 200) {
      const projectName = await response.json();
      // console.log("success fetching the projects names");
      return projectName;
    }
  } catch (error) {
    showMessage("error", `error on get the projects names`);
    return undefined;
  }
};

export { fetchProjectNames };
