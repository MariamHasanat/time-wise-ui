import { IProName } from "../../pages/time-tracker/time-tracker";
import showMessage from "../../utils/message/message";

const fetchProjectNames = async () => {
  try {
    return await fetch(`http://localhost:3001/projects/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token") || "",
      },
    })
      .then(async (response) => {
        if (response.status === 200) {
          const projectName: Array<IProName> = await response.json();
          return projectName;
        }
      })
      .catch((error) => {
        showMessage("error", error);
        return [];
      });
  } catch (error) {
    showMessage("error", "error fetching project name");
    return [];
  }
};

export { fetchProjectNames };
