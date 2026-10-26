export type Project = {
  slug: string;
  title: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "daily-report",
    title: "品牌日报自动化工具",
    summary:
      "读取上传的数据源文件，根据字段对应关系和部分计算规则填写日报；与人工报表逐项核对数字和格式。工具现已在公司使用。",
  },
];
