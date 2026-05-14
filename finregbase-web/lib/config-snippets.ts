const snippet = `{
  "mcpServers": {
    "fin-regbase": {
      "command": "/absolute/path/to/uv",
      "args": [
        "run",
        "--directory",
        "/absolute/path/to/fin-regbase/mcp-server",
        "/absolute/path/to/fin-regbase/mcp-server/server.py"
      ],
      "env": {
        "WIKI_PATH": "/absolute/path/to/fin-regbase/wiki"
      }
    }
  }
}`;

export const configSnippets = {
  claudeDesktop: snippet,
  cursor: snippet,
  vscode: snippet,
  anyMcpClient: snippet,
} as const;
