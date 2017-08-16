//
//  ViewController.swift
//  AwesomeWeatheriOS
//
//  Created by Yin Xiaoyu on 8/10/17.
//  Copyright © 2017 Yin Xiaoyu. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func weatherButtonPressed(sender : UIButton) {
        NSLog("Weather button pressed")
    
        // OPTION 1.
//        let jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
        
        // OPTION 2.
        let jsCodeLocation = Bundle.main.url(forResource: "main", withExtension: "jsbundle")
        
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "AwesomeWeather", initialProperties: nil, launchOptions: nil)
        
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
}

