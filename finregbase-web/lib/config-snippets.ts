export const configSnippets = {
  claudeDesktop: `{
  "mcpServers": {
    "fin-regbase": {
      "command": "uv",
      "args": ["run", "/absolute/path/to/fin-regbase/mcp-server/server.py"],
      "env": {
        "WIKI_PATH": "/absolute/path/to/fin-regbase/wiki"
      }
    }
  }
}`,
  cursor: `{
  "mcpServers": {
    "fin-regbase": {
      "command": "uv",
      "args": ["run", "/absolute/path/to/fin-regbase/mcp-server/server.py"],
      "env": {
        "WIKI_PATH": "/absolute/path/to/fin-regbase/wiki"
      }
    }
  }
}`,
  vscode: `{
  "mcpServers": {
    "fin-regbase": {
      "command": "uv",
      "args": ["run", "/absolute/path/to/fin-regbase/mcp-server/server.py"],
      "env": {
        "WIKI_PATH": "/absolute/path/to/fin-regbase/wiki"
      }
    }
  }
}`,
  anyMcpClient: `{
  "mcpServers": {
    "fin-regbase": {
      "command": "uv",
      "args": ["run", "/absolute/path/to/fin-regbase/mcp-server/server.py"],
      "env": {
        "WIKI_PATH": "/absolute/path/to/fin-regbase/wiki"
      }
    }
  }
}`,
} as const;
