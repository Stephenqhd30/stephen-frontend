import { useEffect, useState } from 'react';
import { matchUsersUsingGet } from '@/services/stephen-backend/userController';
import { message } from 'antd';

export default () => {
  // 推荐用户列表
  const [recommendUserList, setRecommendUserList] = useState<API.UserVO[]>([]);

  /**
   * 加载推荐用户列表数据
   */
  const loadData = async () => {
    try {
      const res = await matchUsersUsingGet({
        pageSize: 10,
      });
      if (res.code === 0 && res.data) {
        setRecommendUserList(res.data);
      }
    } catch (error: any) {
      message.error(`获取匹配用户数据失败${error.message}`);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { recommendUserList, loadData };
};
