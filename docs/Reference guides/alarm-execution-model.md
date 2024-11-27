---
title: Alarm execution model
description: Alarm execution model reference
sidebar_position: 4
---

# Alarm Execution Model

## Alarm activation and deactivation

When a data message is received, for each alarm trigger and data
tuple, alarm activation and deactivation rules are evaluated.

### Only the activation rule is defined

When there is no deactivation rule defined.

| Activation rule? | Action           |
|------------------|------------------|
| yes              | Create new alarm |
| no               | Do nothing       |

### Both activation and deactivation rules are defined

When both the activation and deactivation rules are defined.

| Activation rule? | Deactivation rule? | Alarm active? | Action                                               |
|------------------|--------------------|---------------|------------------------------------------------------|
| no               | no                 | no            | Do nothing                                           |
| no               | no                 | yes           | Do nothing                                           |
| no               | yes                | no            | Do nothing                                           |
| no               | yes                | no            | Deactivate alarm                                     |
| no               | yes                | yes           | Create new active alarm                              |
| yes              | no                 | yes           | Update last-seen of active alarm                     |
| yes              | yes                | no            | Create new inactive alarm                            |
| yes              | yes                | yes           | Deactivate active alarm, and create new active alarm |
