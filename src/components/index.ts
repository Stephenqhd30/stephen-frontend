/**
 * 布局组件
 * 这个文件作为组件的目录
 * 目的是统一管理对外输出的组件，方便分类
 */
import Footer from './Footer';
import { AvatarDropdown, AvatarName } from './RightContent/AvatarDropdown';
import { MdEditor, MdViewer } from '@/components/Markdown';
import { UserCard } from '@/components/ReUser';
import { ActionTabbar, PostCard, PostAvatarCard, PostTitleCard } from '@/components/RePost';

export {
  Footer,
  AvatarDropdown,
  AvatarName,
  MdViewer,
  MdEditor,
  PostCard,
  ActionTabbar,
  UserCard,
  PostAvatarCard,
  PostTitleCard
};
