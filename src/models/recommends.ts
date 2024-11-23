import { useState } from 'react';
import { listMatchUserVoUsingPost } from '@/services/stephen-backend/userController';

/**
 * 推荐用户列表
 */
export default () => {
  // 推荐用户列表
  const [recommends, setRecommends] = useState<API.UserVO[]>([]);

  /**
   * 加载推荐用户列表数据
   */
  const loadData = async () => {
    if (recommends.length === 0) {
      try {
        const res = await listMatchUserVoUsingPost({
          number: 10,
        });
        if (res.code === 0 && res.data) {
          setRecommends(res.data);
        } else {
          setRecommends([]);
        }
      } catch (error: any) {
        setRecommends([]);
      }
    }
  };

  return { recommends, loadData };
};
