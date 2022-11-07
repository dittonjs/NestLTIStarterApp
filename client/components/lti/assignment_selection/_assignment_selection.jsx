import { useContext, useState } from 'react';
import { ApiContext } from '../../../utils/api_context';
import { ContentItemSelectionForm } from '../common/content_item_selection_form';

export const AssignmentSelection = () => {
  const [inputText, setInputText] = useState('');
  const [contentItem, setContentItem] = useState(null);
  const api = useContext(ApiContext);

  const createAssignment = async () => {
    const result = await api.post('/api/lti_launches', { exampleData: inputText });
    setContentItem(result);
  };

  if (contentItem) {
    return <ContentItemSelectionForm contentItem={contentItem} />;
  }

  return (
    <>
      <div>Assignment Selection Example</div>
      <div>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="button" onClick={createAssignment}>
          Create Assignment
        </button>
      </div>
    </>
  );
};
