﻿using System;
using System.Collections.Generic;

namespace CodeLabsGenerator
{
    class Program
    {
        private static readonly string basePagePath = @"C:\Users\RIB\RiderProjects\CodeLabs\BasePageSource\extralevelfolder\BasePage.html";

        static void Main(string[] args)
        {
            GenerateOne("WebshopExercises");
            // GenerateMany();
        }

        private static void GenerateOne(string tutorial)
        {
            string folderPathToMdSteps = @"C:\Users\RIB\RiderProjects\CodeLabs\Tutorials\" + tutorial;
            Console.WriteLine("Generating \"" + folderPathToMdSteps.Split("\\")[^1] + "\" ...");
            Generator.GenerateHtmlPageFromMdFiles(folderPathToMdSteps, basePagePath);
            Console.WriteLine("Done!");
        }

        private static void GenerateMany()
        {
            List<string> tutes = new()
            {
                "BlazorLogin",
                "BlazorTodoTutorialPart1",
                "CodelabsDoc",
                "CsharpDebugging",
                "CsharpSockets",
                "CsharpThreads",
                "DML",
                "EERDiagramInAstah",
                "SepAppendix",
                "SQLAdventure"
            };
            tutes.ForEach(t => GenerateOne(t));
        }
    }
}