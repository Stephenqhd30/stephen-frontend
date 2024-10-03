import { Viewer } from '@bytemd/react';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import gemoji from '@bytemd/plugin-gemoji';
import breaks from '@bytemd/plugin-breaks';
import footnotes from '@bytemd/plugin-footnotes';
import frontmatter from '@bytemd/plugin-frontmatter';
import 'highlight.js/styles/vs.css';
import 'bytemd/dist/index.css';
import 'juejin-markdown-themes/dist/juejin.min.css';
import './index.less';

interface Props {
  value?: string;
}

const plugins = [gfm(), highlight(), mediumZoom(), gemoji(), breaks(), frontmatter(), footnotes()];

/**
 * Markdown 浏览器
 * @param props
 * @constructor
 */
const MdViewer = (props: Props) => {
  const { value = "" } = props;

  return (
    <div className="md-viewer">
      <Viewer value={value} plugins={plugins} />
    </div>
  );
};

export default MdViewer;
