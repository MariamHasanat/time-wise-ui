// import './project-form.css'
// import Input from '../input/input';
// import { Modal, Form, Button } from 'antd';
// import useCreateProject from '../../hooks/project/submit.hook';

// interface IProps {
//   showPopup: boolean;
//   setShowPopup: (oldVal: boolean) => void;
// };

// const ProjectForm = (props: IProps) => {
//   const hook = useCreateProject(props);
//   return (
//     <div className="project-form">
//       <Modal
//         title="Create a New  Project"
//         open={props.showPopup}
//         footer={null}
//         onCancel={hook.resetAndClose}
//         okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
//       >
//         <Form onSubmitCapture={hook.submitHandler}>
//           <Input
//             name="name"
//             value={hook.projectData.name.val}
//             onChange={(e) => hook.projectData.name.onchange(e.target.value)}
//             label="Project Name"
//             required
//           />
//           <Input
//             name="description"
//             label="Description"
//             value={hook.projectData.description.val}
//             onChange={(e) => hook.projectData.description.onchange(e.target.value)}
//           />
//           <Input
//             name="color"
//             label="Color"
//             type="color"
//             value={hook.projectData.color.val}
//             onChange={(e) => hook.projectData.color.onchange(e.target.value)}
//             required
//           />

//           <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
//             <Button style={{ marginRight: 10 }} onClick={hook.resetAndClose}>Cancel</Button>
//             <Button style={{ marginRight: 10 }} htmlType='submit'>Submit</Button>
//           </div>
//         </Form>
//       </Modal>
//     </div >
//   )
// }
// export default ProjectForm;




// import React from 'react';
// import { Modal, Form, Button } from 'antd';
// import Input from '../input/input';
// import useCreateProject from '../../hooks/project/submit.hook';
// import { IProject } from '../../types/project-interface';

// interface IProps {
//   showPopup: boolean;
//   setShowPopup: (oldVal: boolean) => void;
//   onSubmit: (newProject: IProject) => void;
// }

// const ProjectForm: React.FC<IProps> = ({ showPopup, setShowPopup, onSubmit }) => {
//   const hook = useCreateProject({ showPopup, setShowPopup });

//   const handleFormSubmit = (values: any) => {
//     const newProject: IProject = {
//       _id: '',
//       name: values.name,
//       color: values.color,
//       description: values.description,
//       projectHours: 0
//     };
//     onSubmit(newProject);
//     hook.resetAndClose();
//   };

//   return (
//     <div className="project-form">
//       <Modal
//         title="Create a New Project"
//         visible={showPopup}
//         footer={null}
//         onCancel={hook.resetAndClose}
//       >
//         <Form id="category-editor-form" onFinish={handleFormSubmit}>
//           <Input
//             name="name"
//             label="Project Name"
//             required
//           />
//           <Input
//             name="description"
//             label="Description"
//           />
//           <Input
//             name="color"
//             label="Color"
//             type="color"
//             required
//           />

//           <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
//             <Button style={{ marginRight: 10 }} onClick={hook.resetAndClose}>Cancel</Button>
//             <Button style={{ marginRight: 10 }} htmlType="submit">Submit</Button>
//           </div>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default ProjectForm;


import './project-form.css';
import Input from '../input/input';
import { Modal, Form, Button } from 'antd';
import useCreateProject from '../../hooks/project/submit.hook';

import { IProject } from '../../types/project-interface';

interface IProps {
  // Change the type of the parameter to match the IProject interface
  onProjectCreated: (newProject: IProject) => void;
  showPopup: boolean;
  setShowPopup: (oldVal: boolean) => void;
};


const ProjectForm = (props: IProps) => {
  const hook = useCreateProject(props);


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProject = await hook.submitHandler(e);
    console.log("new",newProject);
    
    if (typeof newProject !== 'undefined' && newProject !== null) {
      props.onProjectCreated(newProject as IProject);
    }
  };



  return (
    <div className="project-form">
      <Modal
        title="Create a New Project"
        open={props.showPopup}
        footer={null}
        onCancel={hook.resetAndClose}
        okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
      >
        <Form onSubmitCapture={handleFormSubmit}>
        {/* <Form onSubmitCapture={hook.submitHandler}> */}
    
          <Input
            name="name"
            value={hook.projectData.name.val}
            onChange={(e) => hook.projectData.name.onchange(e.target.value)}
            label="Project Name"
            required
          />
          <Input
            name="description"
            label="Description"
            value={hook.projectData.description.val}
            onChange={(e) => hook.projectData.description.onchange(e.target.value)}
          />
          <Input
            name="color"
            label="Color"
            type="color"
            value={hook.projectData.color.val}
            onChange={(e) => hook.projectData.color.onchange(e.target.value)}
            required
          />


          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <Button style={{ marginRight: 10 }} onClick={hook.resetAndClose}>
              Cancel
            </Button>
            <Button style={{ marginRight: 10 }} htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectForm;
