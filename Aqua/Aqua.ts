// Aqua Dependencies //
import * as fs from "fs";
import * as toml from "toml";
import { exec } from "child_process";

// @ts-ignore //
import * as std from "./aqua/std";
const prefix = "[Aqua] ";

const parseAndRunCommand = std.fn((filePath: string): void => {
  const data = fs.readFileSync(filePath, "utf8");
  const configObject = toml.parse(data);

  if (
    "Interpreter_Config" in configObject &&
    "Name" in configObject.Interpreter_Config &&
    "Path" in configObject.Interpreter_Config &&
    "Main" in configObject.Interpreter_Config
  ) {
    const interpreterName = configObject.Interpreter_Config.Name;
    const path = configObject.Interpreter_Config.Path;
    let mainFile = configObject.Interpreter_Config.Main;

    if (
      "Aqua_Config" in configObject &&
      "Language" in configObject.Aqua_Config
    ) {
      const language = configObject.Aqua_Config.Language;
      const main = configObject.Interpreter_Config.Main;
      if (language === "TypeScript") {
        mainFile = main + ".ts";
      } else if (language === "JavaScript") {
        mainFile = main + ".js";
      } else {
        std.printc(std.colors.red, prefix + "Unsupported language!");
        std.print(prefix + "Language must be TypeScript or JavaScript!");
      }
    }

    const fullCommand = `${interpreterName} ${path}${mainFile}`;
    exec(fullCommand, (error, stdout, _stderr) => {
      if (error) {
        std.print(prefix + `Exec error: ${error}`);
        return;
      }
      const processedStdout = stdout.replace("stdout:", "").trim();
      std.nline();
      std.print(processedStdout);
    });
  } else {
    std.print(
      prefix + "Interpreter_Config section or required properties missing.",
    );
  }
});

const configFile = "Aqua.toml";
parseAndRunCommand(configFile);
