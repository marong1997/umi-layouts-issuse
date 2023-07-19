import { Button } from 'antd';
import { history, useAccess } from 'umi';

export default function IndexPage() {
  const access = useAccess();
  console.log(access, '?????????????????????access');
  return (
    <div>
      user
      <Button
        onClick={() => {
          history.push('/user/detail/hhh');
        }}
      >
        to user/detail/hhh
      </Button>
    </div>
  );
}
