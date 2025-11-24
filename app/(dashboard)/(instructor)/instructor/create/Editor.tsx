/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import RichTextEditor from "reactjs-tiptap-editor";
import { BaseKit } from "reactjs-tiptap-editor";
import { Attachment } from "reactjs-tiptap-editor/attachment";
import { Blockquote } from "reactjs-tiptap-editor/blockquote";
import { Bold } from "reactjs-tiptap-editor/bold";
import { BulletList } from "reactjs-tiptap-editor/bulletlist";
import { Clear } from "reactjs-tiptap-editor/clear";
import { Code } from "reactjs-tiptap-editor/code";
import { CodeBlock } from "reactjs-tiptap-editor/codeblock";
import { Color } from "reactjs-tiptap-editor/color";
import { Emoji } from "reactjs-tiptap-editor/emoji";
import { ExportPdf } from "reactjs-tiptap-editor/exportpdf";
import { ExportWord } from "reactjs-tiptap-editor/exportword";
import { FontFamily } from "reactjs-tiptap-editor/fontfamily";
import { FontSize } from "reactjs-tiptap-editor/fontsize";
import { FormatPainter } from "reactjs-tiptap-editor/formatpainter";
import { Heading } from "reactjs-tiptap-editor/heading";
import { Highlight } from "reactjs-tiptap-editor/highlight";
import { History } from "reactjs-tiptap-editor/history";
import { HorizontalRule } from "reactjs-tiptap-editor/horizontalrule";
import { Iframe } from "reactjs-tiptap-editor/iframe";
import { ImportWord } from "reactjs-tiptap-editor/importword";
import { Indent } from "reactjs-tiptap-editor/indent";
import { Italic } from "reactjs-tiptap-editor/italic";
import { Katex } from "reactjs-tiptap-editor/katex";
import { LineHeight } from "reactjs-tiptap-editor/lineheight";
import { Link } from "reactjs-tiptap-editor/link";
import { Mention } from "reactjs-tiptap-editor/mention";
// import { Mermaid } from "reactjs-tiptap-editor/mermaid";
import { MoreMark } from "reactjs-tiptap-editor/moremark";
import { ColumnActionButton } from "reactjs-tiptap-editor/multicolumn";
import { OrderedList } from "reactjs-tiptap-editor/orderedlist";
import { SearchAndReplace } from "reactjs-tiptap-editor/searchandreplace";
import { SlashCommand } from "reactjs-tiptap-editor/slashcommand";
import { Strike } from "reactjs-tiptap-editor/strike";
import { Table } from "reactjs-tiptap-editor/table";
import { TableOfContents } from "reactjs-tiptap-editor/tableofcontent";
import { TaskList } from "reactjs-tiptap-editor/tasklist";
import { TextAlign } from "reactjs-tiptap-editor/textalign";
import { TextDirection } from "reactjs-tiptap-editor/textdirection";
import { TextUnderline } from "reactjs-tiptap-editor/textunderline";
import { Twitter } from "reactjs-tiptap-editor/twitter";
import "reactjs-tiptap-editor/style.css";
import Image from "reactjs-tiptap-editor/image";
import React, { useCallback, useEffect, useState } from "react";
import { api_url } from "@/hooks/apiurl";

// Create a separate upload handler function
const imageUploadHandler = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("images", file);

    const response = await api_url.post(
      "v1/user/upload-image-for-blog",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("Image upload response:", response.data);
    return response?.data?.[0]?.url;
  } catch (error) {
    console.error("Image upload error:", error);
    // Fallback to creating a blob URL if upload fails
    return URL.createObjectURL(file);
  }
};

const attachmentUploadHandler = async (file: File) => {
  console.log("typeof file:", typeof file);
  console.log("file instanceof File:", file instanceof File);
  console.log("File object:", file);

  const formData = new FormData();
  formData.append("images", file);
  try {
    const response = await api_url.post(
      "v1/user/upload-image-for-blog",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response?.data?.[0]?.url;
  } catch (error) {
    console.log(error);
    // Fallback to creating a blob URL if upload fails
    return URL.createObjectURL(file);
  }
};

// const mermaidUploadHandler = (file: any) => {
//   // fake upload return base 64
//   const reader = new FileReader();
//   reader.readAsDataURL(file);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const blob = convertBase64ToBlob(reader.result as string);
//       resolve(URL.createObjectURL(blob));
//     }, 300);
//   });
// };

const extensions = [
  BaseKit.configure({
    multiColumn: true,
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 50_000,
    },
  }),
  History,
  SearchAndReplace,
  TextDirection,
  TableOfContents,
  FormatPainter.configure({ spacer: true }),
  Clear,
  FontFamily,
  Heading.configure({ spacer: true }),
  FontSize,
  Bold,
  Italic,
  TextUnderline,
  Strike,
  MoreMark,
  Katex,
  Emoji,
  Color.configure({ spacer: true }),
  Highlight,
  BulletList,
  OrderedList,
  TextAlign.configure({ types: ["heading", "paragraph"], spacer: true }),
  Indent,
  LineHeight,
  TaskList.configure({
    spacer: true,
    taskItem: {
      nested: true,
    },
  }),

  // Fixed Image extension configuration
  Image.configure({
    toolbar: true,
    upload: imageUploadHandler, // Direct function reference
  }),

  Link,
  Blockquote.configure({ spacer: true }),
  SlashCommand,
  HorizontalRule,
  Code.configure({
    toolbar: false,
  }),
  CodeBlock.configure({ defaultTheme: "dracula" }),
  ColumnActionButton,
  Table,
  Iframe,
  ExportPdf.configure({ spacer: true }),
  ImportWord.configure({
    upload: (files: File[]) => {
      const f = files.map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      return Promise.resolve(f);
    },
  }),
  ExportWord,
  Mention,
  Attachment.configure({
    upload: attachmentUploadHandler, // Direct function reference
  }),

  // Mermaid.configure({
  //   upload: mermaidUploadHandler, // Direct function reference
  // }),
  Twitter,
];

function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function Editor({
  setContentHtml,
  initialContent,
}: {
  setContentHtml: any;
  initialContent: any;
}) {
  console.log("value for blog", initialContent);
  const [content, setContent] = useState(initialContent);
  useEffect(() => {
    if (initialContent !== undefined && initialContent !== content) {
      setContent(initialContent);
      // If the editor instance exists, update its content
      if (refEditor.current && refEditor.current.editor) {
        refEditor.current.editor.commands.setContent(initialContent);
      }
    }
  }, [initialContent, content]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onValueChange = useCallback(
    debounce((value: string) => {
      setContent(value);
      setContentHtml(value);
    }, 300),
    [setContentHtml]
  );
  const refEditor = React.useRef<any>(null);

  return (
    <>
      <div className="mt-6">
        <RichTextEditor
          ref={refEditor}
          output="html"
          content={content}
          onChangeContent={onValueChange}
          extensions={extensions}
          //   disabled={disable}
          dark={false}
        />
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </>
  );
}

export default Editor;
